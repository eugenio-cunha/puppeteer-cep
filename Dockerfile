FROM node:alpine

# Instala o Chrome e suas dependências
# Instala 'git' para pode fazer clone de dependências privadas
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge \
      nss@edge \
      freetype@edge \
      harfbuzz@edge \
      ttf-freefont@edge \
      git

# Diz ao Puppeteer para não baixar o Chrome. Vamos utilizar a versão que instalamos
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV HOME=/app

EXPOSE 3000

WORKDIR $HOME
COPY ./ $HOME

# Cria um usuário mara não precisar rodar como root
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser $HOME

# Executa tudo daqui pra frente como esse usuário que não é root
USER pptruser

RUN    npm install --only=prod \
    && npm rebuild --quiet

CMD [ "npm", "start" ]