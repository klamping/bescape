ionic build android --release && jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/ant-build/MainActivity-release-unsigned.apk alias_name && rm Busymind.apk && /Users/klamping/Library//Android/sdk/build-tools/22.0.0/zipalign -v 4 platforms/android/ant-build/MainActivity-release-unsigned.apk Busymind.apk

ionic build ios --release
