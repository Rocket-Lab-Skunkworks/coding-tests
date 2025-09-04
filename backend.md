This test is for a DevOps / Backend engineer.

If you do not specialise in DevOps you can ignore the part of the test relating to setting up deployment of your code - You can simply run the code locally on your machine.

We will provide you with SSH login credentials to a VPS server with a small range of ports forwarded to this server.

This VPS will have Debian 12 installed with a few tools like yarn, git, docker, npm, nvm and nodejs pre-installed.

You can install anything else you need on this server.

Your task during the session will be to setup a small expressjs API and secure the system.

We will then ask you to write a few additional API endpoints and deploy this to the VPS live, via changes to your code repository.

You can prepare beforehand a git repository of your choice with a simple expressjs project and it should already have an authentication endpoint working.

Your API must connect to a relational database which you need to install and configure, either on this server or elsewhere.
You can prepare a script to set this up beforehand to save time.

We will give you an SQL file to populate your database with a new table.  The additional API endpoints will be querying this new table.
