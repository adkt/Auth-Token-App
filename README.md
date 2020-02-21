Auth Token Example
==================
This is an example application showcasing a custom Authentication and Cookie Session generation. A non-session Token may be added may be added in the future.


Important
----------
The database file is stored in .data/data.db use the console to view its contents like so:
$ cat .data/data.db

<br/>

To do:
------
- Limit incorrect password attempts to 10, then an email to the Admin is required.
- bCrypt hash Passwords in the database
- configure nodes Crypto API to use Assymetrical encryption so a public key can be used by the client to encrypt a user's local data. 
