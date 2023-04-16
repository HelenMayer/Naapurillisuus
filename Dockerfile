FROM node:18.15.0-alpine
RUN apk --no-cache --update --virtual build-dependencies add \
    git \
    make
LABEL maintainer maier.elena0107@gmail.com
RUN git clone -q https://github.com/HelenMayer/Naapurillisuus
WORKDIR /Naapurillisuus
RUN npm install > /dev/null
EXPOSE 8000
CMD ["npm","start"]
# FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
# WORKDIR /app
# FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
# WORKDIR /src
# COPY ["Naapurillisuus.csproj", "."]
# RUN dotnet restore "./Naapurillisuus.csproj" 
# COPY . .
# WORKDIR "/src/."
# RUN dotnet build "Naapurillisuus.csproj" -c Release -o /app/build
# FROM build AS publish
# RUN dotnet publish "Naapurillisuus.csproj" -c Release -o /app/publish
# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "Naapurillisuus.dll"]