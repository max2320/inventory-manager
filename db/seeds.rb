

[
  {
    name: 'Item 1',
    meta: [{ key: 'quantity', value: '2' }],
    category: 'Cat 1'
  },
  {
    name: 'Item 2',
    meta: [
      { key: 'quantity', value: '2' },
      { key: 'barcode', value: '123132aaa' }
    ],
    category: 'Cat 1'
  },
  {
    name: 'Item 3',
    meta: [
      { key: 'box width (inches)', value: '29' }
    ],
    category: 'Cat 2'
  }
].each do |attrs|
  item = Inventory.new(name: attrs[:name])
  item.metas = attrs[:meta].map { |meta| Meta.new(meta) }

  item.category = Category.find_or_create_by(name: attrs[:category])

  item.save
  puts "Item #{attrs[:name]} #{item.id}"
end
