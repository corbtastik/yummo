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
