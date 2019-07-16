class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
    end
    add_column :messages, :name, :string
    add_column :messages, :email, :string
    add_column :messages, :body, :string
  end
end
