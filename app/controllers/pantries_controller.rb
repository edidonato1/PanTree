class PantriesController < ApplicationController
  before_action :set_pantry, only: [:show, :update]


  def index
    @pantry = Pantry.all

    render json: @pantry
  end


  def show
    render json: @pantry, include: :groceries
  end

  def update 
    if @pantry.update(pantry_params)
      render json: @pantry
    else
      render json: @pantry.errors, status: :unprocessable_entity
    end
  end

  def add_grocery 
    @grocery = Grocery.find(params[:id])
    @pantry = Pantry.find(params[:pantry_id])
    @list = List.find(@grocery.list_id)
    @food = Food.find(@grocery.food_id)

    @list.groceries.delete(@grocery)
    @grocery.toss_date = Time.now + (@food.shelf_life * 86400)
    @grocery.time_left = (@grocery.toss_date - Time.now) / 86400
    @pantry.groceries << @grocery
    
    render json: @pantry, include: :groceries
  end

  # freeze_grocery => pauses time_left and toss_data

  def remove_grocery # do we need this? consider just destroying grocery when removed from the pantry
    @grocery = Grocery.find(params[:id])
    @pantry = Pantry.find(params[:pantry_id])
    
    @pantry.groceries.delete(@grocery)

    @grocery.destroy

    render json: @pantry
  end


  def create
    @pantry = Pantry.new(pantry_params)

    if @pantry.save
      render json: @pantry
    else
      render json: @pantry.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pantry
      @pantry = Pantry.find(params[:id])
    end

    def pantry_params 
      params.require(:pantry).permit(:user_id)
    end
end
