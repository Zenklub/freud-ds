// swift-tools-version: 5.6
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "FreudDS",
    platforms: [.iOS(.v12), .macOS(.v10_12), .tvOS(.v12), .watchOS(.v7)],
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "FreudDSTheme",
            targets: ["FreudDSTheme"]),
        .library(
            name: "FreudDSIcons",
            targets: ["FreudDSIcons"]),
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "FreudDSTheme",
            dependencies: [],
            path: "ios/FreudDSTheme/Sources",
            publicHeadersPath: "module",
            cSettings:[
              .headerSearchPath("../.."),
            ]
        ),
        .target(
            name: "FreudDSIcons",
            dependencies: [],
            path: "ios/FreudDSIcons/Sources",
            publicHeadersPath: "module",
            cSettings:[
              .headerSearchPath("../.."),
            ]
        ),
        .testTarget(
            name: "FreudDSTests",
            dependencies: ["FreudDSTheme"],
            path: "ios/FreudDSTheme/Tests"
        ),
    ]
)
