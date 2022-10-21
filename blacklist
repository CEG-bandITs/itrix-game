#!/bin/bash

if [[ $1 = "" ]] 
then
    echo -e "Usage \n\t./ipremover add IP\n\t./ipremover remove IP"
    exit -1
fi

if [[ $1 = "add" ]] 
then
    iptables -A INPUT -s $2 -j DROP
    echo $2 "Removed Access"
fi

if [[ $1 = "remove" ]] 
then
    iptables -D INPUT -s $2 -j DROP
    echo $2 "Given Access"
fi