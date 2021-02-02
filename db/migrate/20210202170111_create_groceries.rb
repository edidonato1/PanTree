class CreateGroceries < ActiveRecord::Migration[6.0]
  def change
    create_table :groceries do |t|
      t.integer :status
      t.integer :time_left
      t.references :food, foreign_key: true
      t.references :list, foreign_key: true
      t.references :pantry, foreign_key: true

      t.timestamps
    end
  end
end
