// groupId or chatId: leaveGroup 52123123-323235@g.us

//change group description
await client
  .setGroupDescription('00000000-000000@g.us', 'group description')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });

// Leave group
await client.leaveGroup('00000000-000000@g.us');

// Get group members
await client.getGroupMembers('00000000-000000@g.us');

// Get group members ids
await client.getGroupMembersIds('00000000-000000@g.us');

// Generate group invite url link
await client.getGroupInviteLink('00000000-000000@g.us');

// Create group (title, participants to add)
await client.createGroup('Group name', [
  '111111111111@c.us',
  '222222222222@c.us'
]);

// Remove participant
await client.removeParticipant('00000000-000000@g.us', '111111111111@c.us');

// Add participant
await client.addParticipant('00000000-000000@g.us', '111111111111@c.us');

// Promote participant (Give admin privileges)
await client.promoteParticipant('00000000-000000@g.us', '111111111111@c.us');

// Demote particiapnt (Revoke admin privileges)
await client.demoteParticipant('00000000-000000@g.us', '111111111111@c.us');

// Get group admins
await client.getGroupAdmins('00000000-000000@g.us');

// Return the group status, jid, description from it's invite link
await client.getGroupInfoFromInviteLink(InviteCode);

// Join a group using the group invite code
await client.joinGroup(InviteCode);
