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

##############################
#도커 파일 빌드
##############################
#docker build -t example .

##############################
#3아파치 서버
#docker run -p 80:80 example
##############################
# FROM ubuntu:18.04
# MAINTAINER juhyeon <money1994@naver.com>

# RUN apt-get update
# RUN apt-get install -y apache2

# EXPOSE 80

# CMD ["apachectl", "-D", "FOREGROUND"] #아파치를 항상 실행 상태로 하기 위해서 데몬 상태로 만듬

##############################
#4PHP, 아파치 서버
#docker run -p 80:80 -v /home/ubuntu/example/html:/var/www/html example
##############################
# FROM ubuntu:18.04
# MAINTAINER juhyeon <money1994@naver.com>

# ENV DEBIAN_FRONTEND=noninteractive

# RUN apt-get update
# RUN apt-get install -y apache2
# RUN apt-get install -y software-proerties-common
# RUN add-apt-repository ppa:ondrej/php
# RUN apt-get update
# RUN apt-get install -y php5.6

# EXPOSE 80

# CMD ["apachectl", "-D", "FOREGROUND"] #아파치를 항상 실행 상태로 하기 위해서 데몬 상태로 만듬

##############################
#5MYSQL 컨테이너
# docker run -d -p 9876:3306 -e MYSQL_ROOT_PASSWORD=password mysql:5.6
# docker exec -it 컨테이너ID /bin/bash
# mysql -u root -p
# password
# CREATE DATABASE TEST;
# SHOW DATABASES;
# exit;

# docker inspect 컨테이너ID -> ip주소 확인 가능
# mysql -u root -p --host 172.17.0.2 --port 3306
#(또는 mysql -u root -p --host 127.0.0.1 --port 9876)
# (위의 명령을 실행하기 위해선 서버에 mysql을 설치해야함
# sudo apt install mysql-client-core-5.7)
# -> 서버 pc에서 mysql컨테이너에 접근 가능
# CREATE USER 'test'@'%' IDENTIFIED BY 'password';
# GRANT ALL PRIVILEGES ON *.* TO 'test'@'%';
# FLUSH PRIVILEGES;
# exit;
# docker restart 컨테이너ID
##############################

##############################
#6PHP, MYSQL 연동
#docker run -p 80:80 -v /home/ubuntu/example/html:/var/www/html example
##############################
# FROM ubuntu:18.04
# MAINTAINER juhyeon <money1994@naver.com>

# ENV DEBIAN_FRONTEND=noninteractive

# RUN apt-get update
# RUN apt-get install -y apache2
# RUN apt-get install -y software-proerties-common
# RUN add-apt-repository ppa:ondrej/php
# RUN apt-get update
# RUN apt-get install -y php5.6

# Connect PHP & MySQL
#RUN apt-get install -y php5.6-mysql

# EXPOSE 80

# CMD ["apachectl", "-D", "FOREGROUND"] #아파치를 항상 실행 상태로 하기 위해서 데몬 상태로 만듬

##############################
#7DockerHub & GitHub 연동
##############################


##############################
#8Jenkins
##############################
