# -----------------------------------------------------------------------------
# Yummo Makefile for building a container image
# -----------------------------------------------------------------------------
CONTAINER_REGISTRY=quay.io/corbsmartin
# CONTAINER_REGISTRY=harbor.retro.io/retro
IMAGE_NAME=yummo
IMAGE_TAG=v1.1
# -----------------------------------------------------------------------------
# Jekyll targets
# -----------------------------------------------------------------------------
css-solo:
	@mkdir -p .generated/themes/solo/_site
	@yq '.yummo.style = "solo"' _config.yml > .generated/themes/solo/_config.yml
	@jekyll build --config .generated/themes/solo/_config.yml --destination .generated/themes/solo/_site
	@cat .generated/themes/solo/_site/assets/css/main.css | grep ".light-theme" > .generated/themes/solo/solo-light.css
	@cat .generated/themes/solo/_site/assets/css/main.css | grep ".dark-theme" > .generated/themes/solo/solo-dark.css
	@cp .generated/themes/solo/solo-light.css ./assets/ext/css/solo-light.css
	@cp .generated/themes/solo/solo-dark.css ./assets/ext/css/solo-dark.css

run:
	@jekyll serve --port 4002
# -----------------------------------------------------------------------------
# Publish to surge
# -----------------------------------------------------------------------------
surge:
	@jekyll clean
	@jekyll build
	@surge _site/ corbtastik-yummo.surge.sh
# -----------------------------------------------------------------------------
# yummoc builder image
# -----------------------------------------------------------------------------
yummoc:
	@podman build -f ./src/yummoc.Containerfile -t yummoc:latest ./src
# -----------------------------------------------------------------------------
# yummo runtime image
# -----------------------------------------------------------------------------
yummo: yummoc
	@podman build -f Containerfile -t $(IMAGE_NAME):$(IMAGE_TAG) .
	@podman tag $(IMAGE_NAME):$(IMAGE_TAG) $(IMAGE_NAME):latest
	@podman tag $(IMAGE_NAME):latest $(CONTAINER_REGISTRY)/$(IMAGE_NAME):latest

pod: yummo
	@podman rm -f yummo
	@podman run --name yummo -d -p 9866:9866 $(CONTAINER_REGISTRY)/$(IMAGE_NAME):latest
# -----------------------------------------------------------------------------
# Targets for working with yummo
# -----------------------------------------------------------------------------
weekly:
	@./src/templates/weekly.sh --dir ./_posts/weeklies
