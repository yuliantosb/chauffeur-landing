---
publishDate: 2025-05-15T00:00:00Z
title: How to install chauffuer
excerpt: The first step after downloading Chauffeur, you need to setup several configuration, here you can done it with simple instruction
image: ~/assets/images/banner/feature4.jpg
category: Documentation
lang: en
alternate:
  - hreflang: id
    href: bagaimana-cara-menginstall-chauffeur
tags:
  - documentation
  - tips-and-trick
  - tutorial
metadata:
  canonical: https://chauffeurpos.app/en/how-to-install-chauffuer
---

## Setup the Database

First of all, you need to install database first, since Chauffeur using MySQL as a database, you have to download it first or you can also using remote database from your server, recommended using latest mysql version or use 9.2.0 for the best result, you can download mysql database on the official website `https://www.mysql.com/downloads/` and chose the installation based on you device platform.

## Create database

After downloading the database, you can create the database, here I'm using dbeaver the GUI tools for accesing mysql, you can click on the connection you are about to use, append it, click on Databases, right click and click "Create new Database", then named your database

![Create Database](/images/how-to-install-chauffeur/create-db.png)

Or you can do it using command line, first you need to go into mysql CLI by typing

```
sudo mysql -u root
```

or

```
mysql -u <yourdbusername> -p
```

after entering the mysql CLI, then type

```
create db <yourdbname>;
```

then press enter

## Setup DB On Chauffeur

Open up Chauffeur POS App, it will automatically redirect to DB setup, if you haven't setup the db yet, then filled up your database configuration

![Config Database](/images/how-to-install-chauffeur/config-db.png)

After filled up the config, then click "Save" Button, then your db will be restored

## What happen if I already had database setup before?

## Setup Email Server

Email server used for send notifications, reset password etc, when you forgot your password, the OTP will be sent to your email, but you can also skip this proccess, if you skip this process, you won't be able to reset your password

![Config Email](/images/how-to-install-chauffeur/config-email.png)

## Setup General Config

You can customize your preferences, like color, currency, thousand separator, decimal separator, date format, time format, and where you want to put your uploaded file

![Config General Config](/images/how-to-install-chauffeur/config-general.png)

You can browse the folder, or type it

![Browse File](/images/how-to-install-chauffeur/browse-file.png)

After that, you can continue by clicking "Save" you can also skip this process, it will use default configuration
