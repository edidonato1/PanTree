class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :shelf_life
      t.string :storage_type
      t.references :user, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
