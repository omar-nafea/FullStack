#FROM debian:latest

# Update, install ffmpeg, python3, pip and then clean up apt cache
#RUN apt-get update && \
#    apt-get install -y --no-install-recommends ffmpeg python3 python3-pip && \
#    rm -rf /var/lib/apt/lists/*

# Use pip to install yt-dlp AND its dependency for decryption
#RUN pip3 install -U yt-dlp pycryptodomex --break-system-packages

# Set the default working directory for the container
#WORKDIR /data

FROM debian:bookworm-slim

RUN apt update && apt install -y \
    ffmpeg \
    yt-dlp \
    python3 \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /data

ENTRYPOINT ["yt-dlp"]
