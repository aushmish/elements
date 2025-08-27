#!/bin/bash

# Build Storybook hub for all packages
echo "Building Storybook hub..."

# Create storybook-static directory if it doesn't exist
mkdir -p storybook-static

# Copy storybook builds from each package (excluding the storybook hub package)
for package in packages/*/storybook-static; do
    if [ -d "$package" ]; then
        package_name=$(basename $(dirname "$package"))
        # Skip the storybook hub package itself
        if [ "$package_name" != "storybook" ]; then
            echo "Copying $package_name storybook..."
            cp -r "$package" "storybook-static/$package_name"
        fi
    fi
done

# Copy the hub build to root storybook-static
echo "Copying hub build to root..."
cp -r packages/storybook/storybook-static/* storybook-static/

echo "Storybook hub built successfully!"
