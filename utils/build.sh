cd "$(dirname "$0")"
python builder.py deploy_files.txt -o ../build/rendeer.min.js -o2 ../build/rendeer.js
python builder.py deploy_files_base.txt -o ../build/rendeer.base.min.js -o2 ../build/rendeer.base.js
cat ../external/gl-matrix-min.js ../external/litegl.min.js ../build/rendeer.min.js > ../build/rendeer.full.min.js
chmod a+rw ../build/* 
#cp ../build/rendeer.js ../boilerplate/js/extra/rendeer.js
