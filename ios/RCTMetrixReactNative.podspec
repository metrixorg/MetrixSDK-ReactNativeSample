Pod::Spec.new do |s|
  s.name             = 'RCTMetrixReactNative'
  s.version          = '0.1.0'
  s.summary          = 'Metrix'

  s.homepage         = 'https://metrix.ir'
  s.license          = { :type => 'ISC', :file => 'LICENSE' }
  s.author           = { 'Mehdi Azimi' => 'azimi4002@gmail.com' }

  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/metrixorg/MetrixSDK-ReactNativePlugin.git"}
  s.source_files = "ios/RCTMetrixReactNative/*.{h,m}"

  s.dependency "React"
  s.dependency "MetrixSdk"
end
