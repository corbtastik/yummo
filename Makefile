# -----------------------------------------------------------------------------
# Yummo Makefile for building a container image
# -----------------------------------------------------------------------------
CONTAINER_REGISTRY=quay.io/corbsmartin
IMAGE_NAME=yummo
IMAGE_TAG=v1.0
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
