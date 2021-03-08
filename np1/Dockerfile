#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["np1/np1.csproj", "np1/"]
RUN dotnet restore "np1/np1.csproj"
COPY . .
WORKDIR "/src/np1"
RUN dotnet build "np1.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "np1.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "np1.dll"]