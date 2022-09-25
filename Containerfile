# -------------------------------------------------------------------------------------------------
# Transform yummo content into plain HTML,CSS and Javascript to be served by apache below.
# -------------------------------------------------------------------------------------------------
FROM localhost/yummoc:latest AS BUILDER
WORKDIR /tmp/yummo
COPY . /tmp/yummo
RUN jekyll build
# -------------------------------------------------------------------------------------------------
# yummo runtime image based on apache, that serves the build site on port 9696.
# -------------------------------------------------------------------------------------------------
FROM registry.redhat.io/ubi8/ubi
LABEL maintainer="corbs"
ENV PORT 9696
RUN yum update --disablerepo=* --enablerepo=ubi-8-appstream --enablerepo=ubi-8-baseos -y && \
    yum install --disablerepo=* --enablerepo=ubi-8-appstream --enablerepo=ubi-8-baseos httpd -y && \
    yum clean all
RUN sed -ri -e "/^Listen 80/c\Listen ${PORT}" /etc/httpd/conf/httpd.conf && \
    chown -R apache:apache /etc/httpd/logs/ && \
    chown -R apache:apache /run/httpd/
USER apache
EXPOSE ${PORT}
COPY --from=BUILDER /tmp/yummo/_site /var/www/html
# Start Apache in the foreground
CMD ["httpd", "-D", "FOREGROUND"]