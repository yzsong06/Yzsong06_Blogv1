{ pkgs }: {
  deps = [
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.nodePackages.pnpm
		pkgs.nodejs_18
  ];
}