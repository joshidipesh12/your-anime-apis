#!/usr/bin/env sh

echo "Installing python..."
apt-get install python3-pip python-dev

echo "Installing Python Dependencies"
pip install numpy
echo "Install Complete!"