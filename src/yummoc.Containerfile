# ------------------------------------------------------------------------------------------------------------------
# Base Image: ubi8-minimal
# Packages: gcc, gcc-c++, make, ruby, ruby-devel, and jekyll
# Description: Builder image for Jekyll static sites (see: https://jekyllrb.com/)
# ------------------------------------------------------------------------------------------------------------------
FROM registry.access.redhat.com/ubi8-minimal:8.7-923
USER root
LABEL maintainer="corbs"
LABEL summary="UBI8-Minimal base image with packages required for building and running Jekyll static sites."

RUN microdnf update --disablerepo=* --enablerepo=ubi-8-appstream-rpms --enablerepo=ubi-8-baseos-rpms -y && \
    microdnf install --disablerepo=* --enablerepo=ubi-8-appstream-rpms --enablerepo=ubi-8-baseos-rpms gcc -y && \
    microdnf install --disablerepo=* --enablerepo=ubi-8-appstream-rpms --enablerepo=ubi-8-baseos-rpms gcc-c++ -y && \
    microdnf install --disablerepo=* --enablerepo=ubi-8-appstream-rpms --enablerepo=ubi-8-baseos-rpms make -y && \
    microdnf module enable --disablerepo=* --enablerepo=ubi-8-appstream-rpms --enablerepo=ubi-8-baseos-rpms ruby:3.0 -y && \
    microdnf install --disablerepo=* --enablerepo=ubi-8-appstream-rpms --enablerepo=ubi-8-baseos-rpms ruby-devel -y && \
    gem install jekyll && \
    rm -rf /var/cache/yum && \
    rm -rf /var/log/*