Pod::Spec.new do |s|
  s.name             = 'FreudDSIcons'
  s.version          = '0.1.0'
  s.summary          = 'Freud Design System - Icons'
  s.description      = <<-DESC
  Provides incons of Freud Design System
                        DESC

  s.homepage         = 'https://github.com/Zenklub/freud-ds'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.authors          = 'Zenklub'

  s.source           = {
    :git => 'https://github.com/Zenklub/freud-ds.git',
    :branch => 'feature/core-support-ajustments',
    # :tag => 'CocoaPods-' + s.version.to_s,
    :submodules => true
  }
  s.social_media_url = 'https://twitter.com/zenklub'

  ios_deployment_target = '10.0'
  osx_deployment_target = '10.12'
  tvos_deployment_target = '10.0'
  watchos_deployment_target = '6.0'

  s.ios.deployment_target = ios_deployment_target
  s.osx.deployment_target = osx_deployment_target
  s.tvos.deployment_target = tvos_deployment_target
  s.watchos.deployment_target = watchos_deployment_target

  s.swift_version = '5.6'

  s.cocoapods_version = '>= 1.4.0'
  s.prefix_header_file = false

  s.ios.resource_bundle = {
    'FreudDSIconsFonts' => 'ios/FreudDSIcons/Resources/*'
  }

  s.source_files = [
    'ios/FreudDSIcons/Sources/*.swift',
    'ios/FreudDSIcons/Sources/**/*.swift',
    'ios/FreudDSIcons/**/*.h',
  ]
end
