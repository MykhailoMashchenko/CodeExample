# React Native Code Examples: Architecture, Theming, Services, Adapters, and Hooks

Welcome to the code repository showcasing best practices and examples for handling architecture, theming, services, adapters, and hooks in React Native. This README will guide you through the various sections of the codebase and help you understand how our team structures and manages React Native projects.

## Introduction

This repository aims to provide clear and scalable patterns for building React Native applications. It focuses on architecture, theming, services, adapters, and hooks to ensure maintainability, reusability, and a smooth development experience.

## Project Structure

The project is organized in a way that promotes separation of concerns and modularity. Here's an overview of the key directories:

- **src**: Main source code directory.
  - **shared/components**: Reusable UI components.
  - **screens**: Top-level application screens.
  - **services**: Service modules for handling business logic.
  - **adapters**: Adapters for data transformations and integrations.
  - **theme**: Theming configuration and styles.
  - **hooks**: Custom React hooks.
  - **navigation**: Navigation setup and configurations (also navigation typesation).
  - **utils**: General utility functions.


## Architecture

You can go to `src/modules/auth/screens/WelcomeScreen` to see example of small screen and how it's structure look. After that you can check common components it is using `src/shared/components`

## Theming

Basic components use `shopify` theming in this code sample. The theming system allows you to easily customize the look and feel of your application. We use a theme provider to propagate the theme throughout the component tree. Theme files can be found in the `src/app/theme` directory.

## Navigation

WelcomeScreen can navigate to other screens and is a part of bigger navigator `src/navigation/navigators/AuthNavigator` which shows basic navigator with additional typesation.

## Services

Services are responsible for handling business logic and interactions with external APIs. Each service is encapsulated to ensure a clean separation of concerns and easy testing. Examples of service implementations can be found in the `src/services` directory. We have service that has additional adapters in it, so we can easily having same service switch between different adapters (specifically usefull for Notifications for example when we have adapters for Firebase/Onesignal etc and can easily switch between them because of this architectural solution)

## Hooks

Custom hooks are used to encapsulate and reuse logic across components. Examples of custom hooks can be found in the `src/shared/hooks` directory. These hooks cover common functionalities such as state management, API calls, and navigation.
