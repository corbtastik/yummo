# =============================================================================
# Yummo Makefile variables
# =============================================================================
CONTAINER_REGISTRY=quay.io/corbsmartin
IMAGE_NAME=yummo
IMAGE_TAG=v1.0
# -----------------------------------------------------------------------------
# Targets for running containerizing Yummo
# -----------------------------------------------------------------------------
yummoc:
	@podman build -f ./src/yummoc.Containerfile -t yummoc:latest ./src

yummo: yummoc
	@podman build -f Containerfile -t $(IMAGE_NAME):$(IMAGE_TAG) .
	@podman tag $(IMAGE_NAME):$(IMAGE_TAG) $(IMAGE_NAME):latest
	@podman tag $(IMAGE_NAME):latest $(CONTAINER_REGISTRY)/$(IMAGE_NAME):latest

pod: yummo
	@podman rm -f yummo
	@podman run --name yummo -d -p 9866:9866 yummo:latest
	@podman ps

run-pod:
	@podman run --name yummo -d -p 9866:9866 $(CONTAINER_REGISTRY)/$(IMAGE_NAME):latest
