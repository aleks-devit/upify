import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {CheckpointMethod} from './cards/CheckpointMethod'
import {ConnectedAccounts} from './cards/ConnectedAccounts'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateAccount} from './cards/DeactivateAccount'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <CheckpointMethod />
      <ConnectedAccounts />
      <EmailPreferences />
      <Notifications />
      <DeactivateAccount />
    </>
  )
}
