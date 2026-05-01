/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-gmail-message` command */
  export type CreateGmailMessage = ExtensionPreferences & {}
  /** Preferences accessible in the `edit-email-template` command */
  export type EditEmailTemplate = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-gmail-message` command */
  export type CreateGmailMessage = {}
  /** Arguments passed to the `edit-email-template` command */
  export type EditEmailTemplate = {}
}

