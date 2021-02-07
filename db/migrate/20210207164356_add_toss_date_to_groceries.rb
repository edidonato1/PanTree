class AddTossDateToGroceries < ActiveRecord::Migration[6.0]
  def change
    add_column :groceries, :toss_date, :datetime
  end
end
