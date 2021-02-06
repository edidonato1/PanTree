class PantriesController < ApplicationController
  before_action :set_pantry, only: [:show, :update, :add_grocery ]


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
    @pantry.groceries << @grocery
    
    render json: @pantry, include: :groceries
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
