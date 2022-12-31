class SecretSpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :cost

  def cost
    "$#{'%.2f' %object.cost}"
  end

end
