class AddTimeAddedToGroceries < ActiveRecord::Migration[6.0]
  def change
    add_column :groceries, :time_added, :datetime
  end
end
