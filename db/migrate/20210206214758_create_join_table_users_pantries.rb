class CreateJoinTableUsersPantries < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :pantries do |t|
      # t.index [:user_id, :pantry_id]
      # t.index [:pantry_id, :user_id]
    end
  end
end
