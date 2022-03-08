#!/usr/bin/env sh

echo "Installing python..."
python --version

# apt-get install python3-pip python

echo "Installing Python Dependencies"
pip3 install numpy
echo "Install Complete!"