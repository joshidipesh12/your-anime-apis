#!/usr/bin/env sh

echo "Installing python..."
# python --version
apt-get install python3-pip

echo "Installing Python Dependencies"
pip3 install numpy
echo "Install Complete!"