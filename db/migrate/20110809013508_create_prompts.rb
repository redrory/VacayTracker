class CreatePrompts < ActiveRecord::Migration
  def self.up
    create_table :prompts do |t|
      t.string :onyear
      t.string :anniversary
      t.string :max
      t.integer :user_id
      
      t.timestamps
    end
  end

  def self.down
    drop_table :prompts
  end
end
