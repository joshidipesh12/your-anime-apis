#!/usr/bin/env sh

echo "Installing python..."
sudo apt-get install python3-pip python-dev

echo "Installing Python Dependencies"
pip install numpy
echo "Install Complete!"