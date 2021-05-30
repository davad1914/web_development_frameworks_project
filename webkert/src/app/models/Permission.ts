import { AssetInvolvementRole } from "./AssetInvolvementRole";
import { InvolvementIdentificationRef } from "./InvolvementIdentificationRef";
import { Privilege } from "./Privilege";
import { TimePeriod } from "./TimePeriod";

export interface Permission{
  id: string,
  href: string,
  date: Date,
  description: string,
  period: TimePeriod,
  user: InvolvementIdentificationRef,
  granter: InvolvementIdentificationRef,
  privilege: Privilege[],
  assetUserRole: AssetInvolvementRole[]
}