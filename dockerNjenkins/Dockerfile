FROM ubuntu:18.04
MAINTAINER juhyeon <money1994@naver.com>

#Avoiding user interaction with tzdata
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
#install Apache web server (only 'yes')
RUN apt-get install -y apache2
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:ondrej/php
RUN apt-get update
RUN apt-get install -y php5.6

# Connect PHP & MySQL
RUN apt-get install -y php5.6-mysql

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"] #아파치를 항상 실행 상태로 하기 위해서 데몬 상태로 만듬