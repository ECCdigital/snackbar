FROM mongo:8.0.0
 # Will be set through Environment Files
ARG DATABASE_URI
ARG USERNAME
ARG PASSWORD

ENV DATABASE_URI ${DATABASE_URI}
ENV USERNAME ${USERNAME}
ENV DB_PASSWORD ${PASSWORD}

COPY users.json /data/users.json

COPY audioitems.json /data/audioitems.json

CMD mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection users --drop --file /users.json && \
    mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} --collection audioitems --drop --file /audioitems.json
