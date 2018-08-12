#!/bin/bash
NODE='/root/node-v8.11.1-linux-x64/bin/node'

($NODE support.js   >>  support.log 2>&1 &)
