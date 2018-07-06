bucket-dev := 's3://paradigmconstruction-tx-dev'
bucket-live := 's3://paradigmconstruction-tx.com'

develop:
	@npm run start

build:
	@npm run build

serve:
	@npm run serve

deploy:
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*" \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*" \
		--include "*.js" \
		--include "*.js.map" \
		--delete \
		--cache-control='max-age=no-cache, must-revalidate'
	@aws s3 sync public $(bucket-dev) \
		--acl=public-read \
		--exclude "*.html" \
		--exclude "*.js" \
		--exclude "*.js.map" \
		--delete \
		--cache-control='max-age=2592000'
	@node scripts/redirects.js

live:
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*" \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*" \
		--include "*.js" \
		--include "*.js.map" \
		--delete \
		--cache-control='max-age=no-cache, must-revalidate'
	@aws s3 sync $(bucket-dev) $(bucket-live) \
		--acl=public-read \
		--exclude "*.html" \
		--exclude "*.js" \
		--exclude "*.js.map" \
		--delete \
		--cache-control='max-age=2592000'
	@NODE_ENV=production node scripts/redirects.js

.PHONY: develop deploy build live serve
