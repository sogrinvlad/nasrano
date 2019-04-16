class CreateExcrements < ActiveRecord::Migration[5.2]
  def change
    create_table :excrements do |t|
      t.integer :user_id
      t.datetime :shit_out_at

      t.timestamps
    end
  end
end