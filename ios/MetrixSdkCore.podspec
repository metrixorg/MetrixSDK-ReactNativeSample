Pod::Spec.new do |s|
  s.name             = 'MetrixSdkCore'
  s.version          = '0.1.0'
  s.summary          = 'Metrix Core'

  s.homepage         = 'https://metrix.ir'
  s.license          = { :type => 'ISC', :file => 'LICENSE' }
  s.author           = { 'Ahmadreza Saboor' => 'ahmadreza.saboor2012@gmail.com' }

  s.platform     = :ios, "8.0"
  s.source       = { :http => 'file:' + __dir__ + '/MetrixSdk.framework.zip' }
  s.vendored_frameworks = 'MetrixSdk.framework'
  # s.requires_arc = true
end
