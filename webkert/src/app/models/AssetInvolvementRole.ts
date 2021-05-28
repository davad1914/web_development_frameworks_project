import { ManagedEntityRef } from "./ManagedEntityRef";
import { UserRoleRef } from "./UserRoleRef";

export interface AssetInvolvementRole{
  manageableAsset: ManagedEntityRef,
  userRole: UserRoleRef
}