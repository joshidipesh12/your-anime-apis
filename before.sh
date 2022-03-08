#!/usr/bin/env sh

echo "Installing python..."
apt-get install python3-pip python

echo "Installing Python Dependencies"
pip install numpy
echo "Install Complete!"