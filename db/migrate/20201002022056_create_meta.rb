class CreateMeta < ActiveRecord::Migration[6.0]
  def change
    create_table :meta do |t|
      t.integer :inventory_id, null: false

      t.string :key, null: false
      t.string :value

      t.timestamps
    end

    add_foreign_key :meta, :inventories
  end
end
