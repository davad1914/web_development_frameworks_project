import { ManagedEntityRef } from "./ManagedEntityRef";

export interface Privilege{
  manageableAsset: ManagedEntityRef,
  function: string,
  action: string
}