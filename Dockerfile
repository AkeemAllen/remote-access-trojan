FROM kalilinux/kali-rolling:latest
ENV NODE_VERSION=14.15.0

WORKDIR /app

RUN apt-get update && apt-get install -y metasploit-framework && apt-get install -y xdotool

RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

COPY [".", "./"]

RUN npm install

CMD [ "npm", "start"]