import { ManagedEntityRef } from "./ManagedEntityRef";
import { UserRoleRef } from "./UserRoleRef";

export interface AssetInvolvementRole{
  maganeableAsset: ManagedEntityRef,
  userRole: UserRoleRef
}