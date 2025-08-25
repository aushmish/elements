#!/bin/bash

# Build Storybook hub for all packages
echo "Building Storybook hub..."

# Create storybook-static directory if it doesn't exist
mkdir -p storybook-static

# Copy storybook builds from each package
for package in packages/*/storybook-static; do
    if [ -d "$package" ]; then
        package_name=$(basename $(dirname "$package"))
        echo "Copying $package_name storybook..."
        cp -r "$package" "storybook-static/$package_name"
    fi
done

echo "Storybook hub built successfully!"
